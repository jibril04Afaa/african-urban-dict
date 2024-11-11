using AUB_backend;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// DbContext configuration
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));


// CORS configuration
builder.Services.AddCors(options => {
    options.AddPolicy("AllowSpecificOrigin", builder =>
    {
        builder.WithOrigins("http://localhost:3000/words")
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var app = builder.Build();
app.UseRouting();

// enable CORS
app.UseCors("AllowSpecificOrigin");


// default page
app.MapGet("/", () => "API Default Page");


// CRUD actions

// CREATE a new word
app.MapPost("/words", async(AppDbContext DbContext, Word newWord) => {
    DbContext.Words.Add(newWord); // add new word to db
    await DbContext.SaveChangesAsync(); // save changes to db asynchronously
    return Results.Created($"/words/{newWord.Id}", newWord);
});

// READ all words
app.MapGet("/words", async(AppDbContext DbContext) => {
    var words = await DbContext.Words.ToListAsync(); // fetch words from db
    return Results.Ok(words);
});

// READ an existing word by Id
app.MapGet("/words/{id}", async(AppDbContext DbContext, int id) => {
    var word = await DbContext.Words.FindAsync(id); // fetch word from db using Id

    if (word is not null)
    {
        return Results.Ok(word);
    }
    else
    {
        return Results.NotFound();
    }
});

// UPDATE a word
app.MapPut("/words/{id}", async(AppDbContext DbContext, int id, Word updatedWord) =>
{
    var word = await DbContext.Words.FindAsync(id);
    if (word is null)
    {
        return Results.NotFound();
    }

    // update word properties
    word.Term = updatedWord.Term;
    word.Definition = updatedWord.Definition;
    word.Example = updatedWord.Example;
    word.Tags = updatedWord.Tags;
    word.Language = updatedWord.Language;

    await DbContext.SaveChangesAsync(); // save changes to db
    return Results.Ok(word);
});

// DELETE an existing word
app.MapDelete("words/{id}", async(AppDbContext DbContext, int id) => {
    var word = await DbContext.Words.FindAsync(id); // find word by Id
    if (word is null)
    {
        return Results.Ok(word);
    }

    DbContext.Words.Remove(word); // remove word from db
    await DbContext.SaveChangesAsync(); // save changed
    return Results.NoContent(); // return a 204 response (No Content)

});

app.Run();

using AUB_backend;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// DbContext configuration
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

// CREATE a new word
app.MapPost("/words", async(AppDbContext DbContext, Word newWord) => {
    DbContext.Words.Add(newWord); // add new word to db
    await DbContext.SaveChangesAsync(); // save changes to db asynchronously
    return Results.Created($"/words/{newWord.Id}", newWord);
});

// READ an existing word
app.MapGet("/words", async(AppDbContext DbContext) => {
    var words = await DbContext.Words.ToListAsync(); // fetch words from db
    return Results.Ok(words);
});

// UPDATE a word

// DELETE an existing word

app.Run();

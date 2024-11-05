using Microsoft.EntityFrameworkCore;

namespace AUB_backend;

public class AppDbContext: DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options): base(options) { }
    
    public DbSet<Word> Words { get; set; }
}

public class Word
{
    public int Id { get; set; } 
    public string Term { get; set; } // word
    public string Definition { get; set; } // word definition
    public string Example { get; set; } // example sentence
    public string Tags { get; set; } // comma separated tags
    public string Language { get; set; } // language of the word
}

// db context for likes

// db context for Users
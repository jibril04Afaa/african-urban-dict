using Microsoft.EntityFrameworkCore;

namespace backend_inner.Models;
    public class WordContext : DbContext
    {
        // constructor
        public WordContext(DbContextOptions<WordContext> options) : base(options) {}

        public DbSet<WordItem> WordItems { get; set; } = null;
    }
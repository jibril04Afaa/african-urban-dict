using System.ComponentModel.DataAnnotations;

namespace backend_inner;

public class WordItem 
{
    // properties
    public string WordTitle { get; set; }
    [Key] // WordID is the primary key
    public int WordID { get; set; }
    public string Origin { get; set; }
    public string UserName { get; set; }
    public DateOnly DateCreated { get; set; }
}
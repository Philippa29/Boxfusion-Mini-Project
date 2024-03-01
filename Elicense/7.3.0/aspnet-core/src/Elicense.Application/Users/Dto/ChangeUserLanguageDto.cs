using System.ComponentModel.DataAnnotations;

namespace Elicense.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}
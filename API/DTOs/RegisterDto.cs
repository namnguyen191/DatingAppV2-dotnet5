using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; init; }
        [Required]
        public string Password { get; init; }
    }
}
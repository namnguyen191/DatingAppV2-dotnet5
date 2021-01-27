namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; init; }
        public string UserName { get; init; }
        public byte[] PasswordHash { get; init; }
        public byte[] PasswordSalt { get; init; }
    }
}
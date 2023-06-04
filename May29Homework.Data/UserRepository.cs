using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace May29Homework.Data
{
    public class UserRepository
    {
        private readonly string _connectionString;
        public UserRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddUser(User u, string password)
        {
            var context = new UserDbContext(_connectionString);
            u.PasswordHash = BCrypt.Net.BCrypt.HashPassword(password);
            context.Users.Add(u);
            context.SaveChanges();
        }
        public User GetUserByEmail(string email)
        {
            var context = new UserDbContext(_connectionString);
            return context.Users.Include(u => u.Bookmarks).FirstOrDefault(u => u.Email == email);
        }
        public User Login(string email, string password)
        {
            User u = GetUserByEmail(email);
            
            if(u == null)
            {
                return null;
            }

            var isValidPassword = BCrypt.Net.BCrypt.Verify(password, u.PasswordHash);

            if (!isValidPassword)
            {
                return null;
            }

            return u;
        }
    }
}

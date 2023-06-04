using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace May29Homework.Data
{
    public class BookmarkRepository
    {
        private readonly string _connectionString;
        public BookmarkRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddBookmark(Bookmark bookmark)
        {
            var context = new UserDbContext(_connectionString);
            context.Bookmarks.Add(bookmark);
            context.SaveChanges();
        }
        public List<BookmarkCount> GetTopFiveBookmarks()
        {
            var context = new UserDbContext(_connectionString);
            return context.Bookmarks.GroupBy(b => b.Url).
                Select(x => new BookmarkCount { Url = x.Key, Count = x.Count() })
                .OrderByDescending(bc => bc.Count).Take(5).ToList();
        }
        public List<Bookmark> GetMyBookmarks(int id)
        {
            var context = new UserDbContext(_connectionString);
            return context.Bookmarks.Where(b => b.UserId == id).ToList();
        }
        public void DeleteBookmark(Bookmark b)
        {
            var context = new UserDbContext(_connectionString);
            context.Bookmarks.Remove(b);
            context.SaveChanges();
        }
        public void EditBookmark(Bookmark b)
        {
            var context = new UserDbContext(_connectionString);
            context.Bookmarks.Update(b);
            context.SaveChanges();
        }
    }
}

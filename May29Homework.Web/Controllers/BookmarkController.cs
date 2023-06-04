using May29Homework.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace May29Homework.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarkController : ControllerBase
    {
        private readonly string _connectionString;
        public BookmarkController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost]
        [Authorize]
        [Route("addbookmark")]
        public void AddBookmark(Bookmark b)
        {
            var bookmarkRepo = new BookmarkRepository(_connectionString);
            var userRepo = new UserRepository(_connectionString);
            var userId = userRepo.GetUserByEmail(User.Identity.Name).Id;
            b.UserId = userId;
            bookmarkRepo.AddBookmark(b);
        }
        [HttpGet]
        [Route("gettopfive")]
        public List<BookmarkCount> GetTopFiveBookmarks()
        {
            var bookmarkRepo = new BookmarkRepository(_connectionString);
            return bookmarkRepo.GetTopFiveBookmarks();
        }
        [HttpGet]
        [Authorize]
        [Route("getmybookmarks")]
        public List<Bookmark> GetMyBookmarks()
        {
            var bookmarkRepo = new BookmarkRepository(_connectionString);
            var userRepo = new UserRepository(_connectionString);
            var userId = userRepo.GetUserByEmail(User.Identity.Name).Id;
            return bookmarkRepo.GetMyBookmarks(userId);
        }
        [HttpPost]
        [Authorize]
        [Route("deletebookmark")]
        public void DeleteBookmark(Bookmark b)
        {
            var bookmarkRepo = new BookmarkRepository(_connectionString);
            bookmarkRepo.DeleteBookmark(b);
        }
        [HttpPost]
        [Authorize]
        [Route("updatebookmark")]
        public void EditBookmark(Bookmark b)
        {
            var bookmarkRepo = new BookmarkRepository(_connectionString);
            bookmarkRepo.EditBookmark(b);
        }
    }
}

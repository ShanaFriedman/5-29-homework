using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace May29Homework.Data
{
    public class UserBookmark
    {
        public int UserId { get; set; }
        public int BookMarkId { get; set; }
        [JsonIgnore]
        public User User { get; set; }
        [JsonIgnore]
        public Bookmark Bookmark { get; set; }
    }
}

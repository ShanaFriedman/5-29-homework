using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace May29Homework.Data
{
    public class BookmarkCount
    {
        public string Url { get; set; }
        public int Count { get; set; }
    }
}

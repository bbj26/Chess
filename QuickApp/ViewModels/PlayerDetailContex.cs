using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickApp.ViewModels
{
    public class PlayerDetailContex: DbContext
    {
        public PlayerDetailContex(DbContextOptions<PlayerDetailContex> options):base(options)
        {

        }

        public DbSet<PlayerDetail> PlayerDetails { get; set; }
    }
}

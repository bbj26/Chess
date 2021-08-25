using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuickApp.ViewModels
{
    public class PlayerDetail
    {
        [Key]
        public int PlayerId { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string PlayerName { get; set; }

        [Column(TypeName = "int")]
        public int MatchesPlayed { get; set; }

        [Column(TypeName = "int")]
        public int Wins { get; set; }

        [Column(TypeName = "int")]
        public int Points { get; set; }
    }
}

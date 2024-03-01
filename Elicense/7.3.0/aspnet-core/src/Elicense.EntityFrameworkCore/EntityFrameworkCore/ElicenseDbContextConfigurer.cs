using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace Elicense.EntityFrameworkCore
{
    public static class ElicenseDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<ElicenseDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<ElicenseDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}

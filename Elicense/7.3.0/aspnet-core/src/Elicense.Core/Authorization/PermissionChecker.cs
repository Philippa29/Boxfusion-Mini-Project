using Abp.Authorization;
using Elicense.Authorization.Roles;
using Elicense.Authorization.Users;

namespace Elicense.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}

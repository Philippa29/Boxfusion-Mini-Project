using System.Threading.Tasks;
using Elicense.Models.TokenAuth;
using Elicense.Web.Controllers;
using Shouldly;
using Xunit;

namespace Elicense.Web.Tests.Controllers
{
    public class HomeController_Tests: ElicenseWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}
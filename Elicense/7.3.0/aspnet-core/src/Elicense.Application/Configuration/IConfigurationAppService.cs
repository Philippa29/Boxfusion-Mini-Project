using System.Threading.Tasks;
using Elicense.Configuration.Dto;

namespace Elicense.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}

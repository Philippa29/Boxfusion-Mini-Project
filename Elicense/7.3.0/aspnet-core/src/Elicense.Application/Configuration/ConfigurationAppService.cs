using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using Elicense.Configuration.Dto;

namespace Elicense.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : ElicenseAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}

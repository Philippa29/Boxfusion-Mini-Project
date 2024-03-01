using Elicense.Debugging;

namespace Elicense
{
    public class ElicenseConsts
    {
        public const string LocalizationSourceName = "Elicense";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "774d5e680ced44938ae3d764c7c74f96";
    }
}

using System;
using System.Net.Http;
using System.Threading.Tasks;
using BarclaysHomework.Interfaces;
using BarclaysHomework.Settings;
using Microsoft.Extensions.Options;

namespace BarclaysHomework.Services
{
    public class VatService : IVatService
    {
        private static readonly HttpClient HttpClient;

        private readonly IOptions<AppSetting> _appSetting;

        static VatService() => HttpClient = new HttpClient();

        public VatService(IOptions<AppSetting> appSetting) => _appSetting = appSetting;

        public async Task<string> FetchVatData()
        {
            try
            {
                HttpResponseMessage response = (await HttpClient.GetAsync(_appSetting.Value.RemoteUrl)).EnsureSuccessStatusCode();

                return await response.Content.ReadAsStringAsync();
            }
            catch (HttpRequestException exception)
            {
                throw new Exception($"VatService http request error: {exception.Message}");
            }
            catch (Exception exception)
            {
                throw new Exception($"VatService error: {exception.Message}");
            }
        }
    }
}

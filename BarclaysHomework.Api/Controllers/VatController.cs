using System.Threading.Tasks;
using BarclaysHomework.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;


namespace BarclaysHomework.Controllers
{
    [Route("api/[controller]")]
    public class Vat : Controller
    {
        private readonly IVatService _vatService;

        public Vat(IVatService vatService) => _vatService = vatService;

        [HttpGet]
        [EnableCors("AllowOnlyClient")]
        public async Task<JsonResult> Get() => Json(JObject.Parse(await _vatService.FetchVatData()));
    }
}

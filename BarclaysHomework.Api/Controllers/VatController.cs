using System.Threading.Tasks;
using BarclaysHomework.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BarclaysHomework.Controllers
{
    [Route("api/[controller]")]
    public class Vat : Controller
    {
        private readonly IVatService _vatService;

        public Vat(IVatService vatService) => _vatService = vatService;

        [HttpGet]
        [EnableCors("AllowOnlyClient")]
        public async Task<string> Get()
        {
            return await _vatService.FetchVatData();
        }
    }
}

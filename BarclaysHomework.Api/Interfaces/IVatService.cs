using System.Threading.Tasks;

namespace BarclaysHomework.Interfaces
{
    public interface IVatService
    {
        Task<string> FetchVatData();
    }
}

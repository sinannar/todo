using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace todo_be.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TestController : Controller
    {
        [HttpPost]
        public List<string> Test()
        {
            return new string[] { "value1", "value2" }.ToList();
        }

    }
}

using System;

namespace WSWL.Domain.Base
{
    public class ModelBase
    {
        public int? id { get; set; }

        public string matriculaInclusao { get; set; }
        public int? naoEmpregadoInclusao { get; set; }
        public DateTime? dataInclusao { get; set; }
    }
}

using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;

namespace WSWL.Mapping.Converter
{
    public class DateValueConverter : ValueConverter<DateTime?, DateTime>
    {
        public DateValueConverter(ConverterMappingHints mappingHints = null)
            : base(
                id => id.Value,
                value => DateTime.Now,
                mappingHints
            )
        { }
    }
}

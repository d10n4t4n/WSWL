using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace WSWL.Mapping.Converter
{
    public class IdValueConverter : ValueConverter<int?, int>
    {
        public IdValueConverter(ConverterMappingHints mappingHints = null)
            : base(
                id => id.HasValue ? id.Value : 0,
                value => value,
                mappingHints
            )
        { }
    }
}

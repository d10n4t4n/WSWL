using WSWL.IRepository;
using WSWL.IRepository.Base;
using WSWL.IRepository.IUnitOfWork;
using WSWL.IService;
using WSWL.Repository;
using WSWL.Repository.Base;
using WSWL.Repository.Context;
using WSWL.Repository.UnitOfWork;
using WSWL.Service;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Localization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Globalization;
using Microsoft.OpenApi.Models;
using System;

namespace WSWL.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers()
                .AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.PropertyNamingPolicy = null;
                options.JsonSerializerOptions.DictionaryKeyPolicy = null;
            })
                .AddNewtonsoftJson(options =>
                {  
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1",
                    new OpenApiInfo
                    {
                        Title = "WSWL - Api",
                        Version = "v1",
                        Description = "Api de consumo do WSWL",
                        Contact = new OpenApiContact
                        {
                            Name = "WSWL",
                            Url = new Uri("https://www.linkedin.com/in/dionatan-goncalves")
                        }
                    });
            });

            services.AddSwaggerGenNewtonsoftSupport();

            services.AddCors();

            #region DADOS DE CONTEXT E IoC
            services.AddDbContext<RepositoryContext>(options => options
                       .UseSqlServer(Configuration.GetConnectionString("SqlServerConnection"))
                       .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));

            services.AddScoped(typeof(IUnitOfWork), typeof(UnitOfWork));
            services.AddScoped(typeof(IRepositoryBase<>), typeof(RepositoryBase<>));

            //Repository
            services.AddTransient<IPollRepository, PollRepository>();
            services.AddTransient<IRestaurantRepository, RestaurantRepository>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IVoteRepository, VoteRepository>();

            //Service
            services.AddTransient<IPollService, PollService>();
            services.AddTransient<IRestaurantService, RestaurantService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IVoteService, VoteService>();
            services.AddTransient<IAuthService, AuthService>();

            #endregion
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            var supportedCultures = new[] { new CultureInfo("pt-BR") };
            app.UseRequestLocalization(new RequestLocalizationOptions
            {
                DefaultRequestCulture = new RequestCulture(culture: "pt-BR", uiCulture: "pt-BR"),
                SupportedCultures = supportedCultures,
                SupportedUICultures = supportedCultures
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "WSWL - Api");
            });

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(options =>
                options.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

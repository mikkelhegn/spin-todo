using System;
using Fermyon.Spin.Sdk;

namespace todo;

public static class Handler
{
    [HttpHandler]
    public static HttpResponse HandleHttpRequest(HttpRequest request)
    {
        Console.WriteLine("API: Something got done");

        // If you want to learn more about how to store data in a PostgresDB
        // check out this sample: https://github.com/fermyon/spin-dotnet-sdk/tree/main/samples/Fermyon.PetStore

        return new HttpResponse
        {
            StatusCode = System.Net.HttpStatusCode.OK,
            Headers = new Dictionary<string, string>
            {
                { "Content-Type", "text/plain" },
            },
            BodyAsString = "From API: Something got done!\n",
        };
    }
}

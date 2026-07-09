import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.*;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class Main {

    private static List<String> quotes;

    public static void main(String[] args) throws Exception {

        quotes = loadQuotes();

	System.out.println("Total quotes loaded: " + quotes.size());

        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);

        // Home Page
        server.createContext("/", exchange ->
                serveStaticFile(exchange, "index.html", "text/html"));

        // CSS
        server.createContext("/style.css", exchange ->
                serveStaticFile(exchange, "style.css", "text/css"));

        // JavaScript
        server.createContext("/script.js", exchange ->
                serveStaticFile(exchange, "script.js", "application/javascript"));

        // API
        server.createContext("/api/quote", exchange -> {

            enableCors(exchange);

            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(204, -1);
                return;
            }

            String quote = getRandomQuote();

            String json =
                    "{ \"quote\" : \"" +
                            quote.replace("\"", "\\\"")
                            + "\" }";

            byte[] response = json.getBytes(StandardCharsets.UTF_8);

            exchange.getResponseHeaders().set("Content-Type", "application/json");

            exchange.sendResponseHeaders(200, response.length);

            OutputStream os = exchange.getResponseBody();
            os.write(response);
            os.close();

        });

        server.setExecutor(null);

        server.start();

        System.out.println("---------------------------------");

        System.out.println("MotivaFlow Started ");

        System.out.println("http://localhost:8000");

        System.out.println("--------------------------------");

    }

    private static void enableCors(HttpExchange exchange) {

        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");

        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "*");

        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, OPTIONS");

    }

    private static void serveStaticFile(HttpExchange exchange,
                                        String filename,
                                        String contentType) throws IOException {

        InputStream input =
                Main.class.getClassLoader()
                        .getResourceAsStream("static/" + filename);

        if (input == null) {

            String message = "404 Not Found";

            exchange.sendResponseHeaders(404, message.length());

            exchange.getResponseBody().write(message.getBytes());

            exchange.close();

            return;
        }

        byte[] bytes = input.readAllBytes();

        exchange.getResponseHeaders().set("Content-Type", contentType);

        exchange.sendResponseHeaders(200, bytes.length);

        exchange.getResponseBody().write(bytes);

        exchange.close();

    }

    private static List<String> loadQuotes() {

        try (BufferedReader reader = new BufferedReader(

                new InputStreamReader(

                        Main.class.getClassLoader()

                                .getResourceAsStream("quotes.txt"),

                        StandardCharsets.UTF_8))) {

            return reader.lines().collect(Collectors.toList());

        } catch (Exception e) {

            throw new RuntimeException("Unable to load quotes.txt");

        }

    }

    private static String getRandomQuote() {

        Random random = new Random();

        return quotes.get(random.nextInt(quotes.size()));

    }

}

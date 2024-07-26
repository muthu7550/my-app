package project1;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class servlet
 */
@WebServlet("/submit")
public class servlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.print("hello");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Get parameters from the request
        String name = request.getParameter("name");
        String age = request.getParameter("age");

        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            // Load the MySQL driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Connect to the database
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/names", "root", "Muthu@100100");

            // Prepare SQL statement
            String sql = "INSERT INTO namelist (name, age) VALUES (?, ?)";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, name);
            stmt.setInt(2, Integer.parseInt(age));

            // Execute SQL statement
            stmt.executeUpdate();

            // Respond to client
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            out.println("<html><body>");
            out.println("<h2>Data successfully inserted</h2>");
            out.println("</body></html>");

        } catch (ClassNotFoundException e) {
            // Handle the ClassNotFoundException (e.g., JDBC driver not found)
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            out.println("<html><body>");
            out.println("<h2>Error: MySQL Driver not found</h2>");
            out.println("</body></html>");
            e.printStackTrace();
        } catch (SQLException e) {
            // Handle the SQLException (e.g., database error)
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            out.println("<html><body>");
            out.println("<h2>Error: Failed to insert data into the database</h2>");
            out.println("<p>" + e.getMessage() + "</p>");
            out.println("</body></html>");
            e.printStackTrace();
        } finally {
            try {
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}

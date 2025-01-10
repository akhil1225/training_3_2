public class stars{
    public static void main(String[] args) {
        int n = 5; // Size of the "X" pattern (odd number preferred for symmetry)

        // Loop for each row
        for (int i = 0; i < n; i++) {
            // Loop for each column
            for (int j = 0; j < n; j++) {
                // Print star if row and column indices match the conditions for "X"
                if (i == j || i + j == n - 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            // Move to the next line
            System.out.println();
        }
    }
}

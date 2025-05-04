import java.util.*;

public class solution {
    public static List<String> restoreIpAddresses(String s) {
        List<String> result = new ArrayList<>();
        backtrack(s, 0, new ArrayList<>(), result);
        return result;
    }

    private static void backtrack(String s, int start, List<String> path, List<String> result) {
        if (path.size() == 4) {
            if (start == s.length()) {
                result.add(String.join(".", path));
            }
            return;
        }

        for (int len = 1; len <= 3; len++) {
            if (start + len > s.length())
                break;

            String part = s.substring(start, start + len);

            if ((part.startsWith("0") && part.length() > 1) || Integer.parseInt(part) > 255) {
                continue; // skip invalid segments
            }

            path.add(part); // choose
            backtrack(s, start + len, path, result); // explore
            path.remove(path.size() - 1); // unchoose
        }
    }

    // Example usage
    public static void main(String[] args) {
        String input = "25525511135";
        List<String> ips = restoreIpAddresses(input);
        System.out.println(ips); // Output: [255.255.11.135, 255.255.111.35]
    }
}

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class solution {

    public static List<String> uniqueElements(List<String> arr) {
        // Write your code here
        Set<String> seen = new HashSet<>();
        List<String> result = new ArrayList<>();

        for (String str : arr) {
            if (!seen.contains(str)) {
                seen.add(str);
                result.add(str);
            }
        }

        return result;
    }

    public static void main(String[] args) {
        System.out.println(uniqueElements(List.of("apple", "banana", "apple", "orange", "banana", "kiwi")));
    }
}
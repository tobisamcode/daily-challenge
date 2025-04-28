import java.util.HashMap;
import java.util.Map;

public class solution {
    public static int countDuplicates(int[] nums) {
        // Write your code here
        int duplicatedCount = 0;
        Map<Integer, Integer> freq = new HashMap<>();

        for (int num : nums) {
            freq.putIfAbsent(num, 0);
            freq.put(num, freq.get(num) + 1);
        }

        for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
            if (entry.getValue() > 1) {
                duplicatedCount++;
            }
        }

        return duplicatedCount;
    }

    public static void main(String[] args) {
        System.out.println(countDuplicates(new int[] { 1, 2, 3, 4, 5, 1, 2, 6, 6 }));
    }
}

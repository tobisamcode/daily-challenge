
public class solution {
    public static int majorityElement(int[] nums) {
        // Write your code here
        int count = 0;
        int majority = 0;

        for (int num : nums) {
            if (count == 0) {
                majority = num;
            }
            count += num == majority ? 1 : -1;
        }

        int freq = 0;
        for (int num : nums) {
            freq += num == majority ? 1 : 0;
        }

        return freq > nums.length / 2 ? majority : -1;
    }

    public static void main(String[] args) {
        System.out.println(majorityElement(new int[] { 3, 3, 4, 2, 4, 4, 2, 4, 4 }));
    }
}

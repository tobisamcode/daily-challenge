
public class solution {

    public static int singleNonDuplicate(int[] nums) {
        // Write your code here
        int result = 0;
        for (int num : nums) {
            result ^= num;
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(singleNonDuplicate(new int[] { 1, 1, 3, 3, 4, 4, 5, 7, 7 }));
    }
}

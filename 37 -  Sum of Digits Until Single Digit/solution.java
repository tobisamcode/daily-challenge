public class solution {
    public static int sumOfDigits(int num) {
        while ( num >= 10 ) {
            int sum = 0;
            while ( num > 0 ) {
                sum += num % 10;
                num = num / 10;
            }
            num = sum;
        }
        return num;
    }



    public static void main(String[] args) {
        System.out.println(sumOfDigits(38));
    }
}
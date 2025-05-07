
public class solution {
    public static String capitalizeFirstLetter(String sentence) {
        String[] words = sentence.split(" ");
        StringBuilder result = new StringBuilder();
        for (String word : words) {
            result.append(word.substring(0, 1).toUpperCase());
            result.append(word.substring(1));
            result.append(" ");
        }
        return result.toString().trim();
    }

    public static void main(String[] args) {
        String sentence = "hello world";
        System.out.println(capitalizeFirstLetter(sentence));
    }
}

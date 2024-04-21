import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

public class BOJ1935 {




    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(br.readLine());
        String expression = br.readLine();

        double[] value = new double[num];

        // A~Z 값은 순서대로!
        for (int i = 0; i < value.length; i++) {
            value[i] = Double.parseDouble(br.readLine());
        }

        Stack<Double> resultStack = new Stack<>();

        double result = 0.0;

        for (int i = 0; i < expression.length(); i++) {
            if ('A' <= expression.charAt(i) && expression.charAt(i) <= 'Z') {
                resultStack.push(value[expression.charAt(i) - 'A']);
            } else {
                double first = resultStack.pop();
                double second = resultStack.pop();

                if (expression.charAt(i) == '+') {
                    result = first + second;
                    resultStack.push(result);
                } else if (expression.charAt(i) == '-') {
                    result = second - first; // 순서 주의
                    resultStack.push(result);
                } else if (expression.charAt(i) == '/') {
                    result = second / first; // 순서 주의
                    resultStack.push(result);
                } else  {
                    result = first * second;
                    resultStack.push(result);
                }
            }
        }

        result = resultStack.pop();
        System.out.printf("%.2f", result);




    }
}




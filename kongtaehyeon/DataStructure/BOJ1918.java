import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

public class BOJ1918 {

    static int[] operationPriority = new int[100];

    /**
     * 단순 연산자 우선순위를 비교하기 위함.
     */
    private static void init() {
        operationPriority['+'] = operationPriority['-'] = 0;
        operationPriority['*'] = operationPriority['/'] = 1;
        operationPriority['('] = operationPriority[')'] = -1;
    }
    /**
     * 후위 연산자.
     * A~Z 라면 바로 출력한다.
     * ( 는 ) 가 나타날 때까지 스택에 저장한다.
     * 이후, 그 사이의 있는 연산자들을 모두 출력하낟.
     * 이외 연산자라면 자신보다 높은 연산자를 모두 꺼낸 후, 스택에 넣는다.
     *
     */
    public static void main(String[] args) throws Exception {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        init();

        String input = bufferedReader.readLine();

        StringBuilder result = new StringBuilder();

        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);

            if ('A' <= c && c <= 'Z') {
                result.append(c);

            }
            else if (c == '(') {
                stack.add(c);
            }
            else if (c == ')') {
                while (stack.peek() != '(') {
                    result.append(stack.pop());
                }
                stack.pop(); // ( , ) 를 포함하지 않을꺼니까.
            }
            else {
                while (!stack.isEmpty() && operationPriority[stack.peek()] >= operationPriority[c]) {
                    result.append(stack.pop());
                }
                stack.add(c);
            }
        }
        while (!stack.isEmpty()) {
            result.append(stack.pop());
        }
        System.out.println(result);
    }
}

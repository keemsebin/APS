import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.util.Stack;


public class BOJ1874 {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder result = new StringBuilder();


        int length = Integer.parseInt(br.readLine());

        Stack<Integer> tempStack = new Stack<>(); // 이놈을 빼서 결과를 위한 스택에 넣자!
        Stack<Integer> resultStack = new Stack<>();

        // 그냥 정수로 시작해서 1씩 증가시켜도 될듯 . . . . .
        for (int i = length; i > 0; i--) {
            tempStack.push(i);
        }


        for (int i = 0; i < length; i++) {

            int number = Integer.parseInt(br.readLine()); // 이 숫자를 만들어야 해!
            int top = -1;

            // 비어있는 경우도 생각해야 해!
            if (!tempStack.isEmpty()) top = tempStack.peek();


            if (number > top  && !tempStack.isEmpty()) { // 만들어야 하는 숫자가 더 크면!

                while (top != number) {
                    top = tempStack.pop();
                    resultStack.push(top);
                    result.append("+\n");
                }

                resultStack.pop();

                if (resultStack.isEmpty() && tempStack.isEmpty()) {
                    result.append("-");
                } else {
                    result.append("-\n");
                }
            }

            else if (number == top) { // 만들어야 하는 숫자랑 같다면!
                top = tempStack.pop();
                resultStack.push(top);
                resultStack.pop();

                result.append("+\n");
                if (resultStack.isEmpty() && tempStack.isEmpty()) {
                    result.append("-");
                } else {
                    result.append("-\n");
                }
            }


            else { // 더 작다면 => 이건 resultStack 에 값이 있겠지??? => No 가 나와야하는 경우는 여기서 결정되는 것.

                while (true) {

                    if (resultStack.isEmpty()) {
                        System.out.println("NO");
                        return;
                    }

                    int resultStackTop = resultStack.peek();

                    if (resultStackTop < number) {
                        System.out.println("NO");
                        return;
                    }
                    else if (resultStackTop == number) {
                        resultStack.pop();
                        if (resultStack.isEmpty() && tempStack.isEmpty()) {
                            result.append("-");
                        } else {
                            result.append("-\n");
                        }
                        break;
                    } else {
                        resultStack.pop();
                        if (resultStack.isEmpty() && tempStack.isEmpty()) {
                            result.append("-");
                        } else {
                            result.append("-\n");
                        }
                    }
                }
            }
        }

        System.out.print(result);
    }
}

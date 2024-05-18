import java.io.BufferedReader;
import java.io.InputStreamReader;

public class BOJ20546 {

    public static void main(String[] args) throws Exception{
        int cashJ;
        int cashS;

        int stockNumberJ = 0;
        int stockNumberS = 0;
        int stockPrice = 0;


        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        cashJ = Integer.parseInt(br.readLine()); // 무조건 사고 안팔아!

        cashS = cashJ;

        String[] chart = br.readLine().split(" ");


        for (int i = 0; i < chart.length; i++) {

            stockPrice = Integer.parseInt(chart[i]);

            // 준현이.
            int number = cashJ / stockPrice;
            stockNumberJ += number;
            cashJ = cashJ - (stockPrice * number);

            // 성민이.
            if (i >= 3) {
                int threeDaysAgo = Integer.parseInt(chart[i-3]);
                int twoDaysAgo = Integer.parseInt(chart[i-2]);
                int oneDaysAgo = Integer.parseInt(chart[i-1]);
                int toDay = Integer.parseInt(chart[i]);

                int firstFlow = twoDaysAgo - threeDaysAgo;
                int secondFlow = oneDaysAgo - twoDaysAgo;
                int thirdFlow = toDay - oneDaysAgo;



                if (firstFlow < 0 && secondFlow < 0 && thirdFlow < 0) { // 구매 타이밍

                    number = cashS / stockPrice;
                    stockNumberS += number;
                    cashS = cashS - (stockPrice * number);


                }

                else if (firstFlow > 0 && secondFlow > 0 && thirdFlow > 0) { // 판매 타이밍
                    cashS = cashS + (stockNumberS * stockPrice);
                    stockNumberS = 0;
                }
            }



        }
        // 마지막 가격 비교.
        cashJ = cashJ + (stockNumberJ * stockPrice);
        cashS = cashS + (stockNumberS * stockPrice);



        if (cashJ > cashS) System.out.println("BNP");
        else if (cashJ < cashS) System.out.println("TIMING");
        else System.out.println("SAMESAME");
    }
}
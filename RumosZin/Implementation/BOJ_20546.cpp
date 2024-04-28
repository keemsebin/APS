#include <iostream>
#include <vector>

using namespace std;

int money; 
vector<int> stock;

int jun_cash, jun_stock;
int min_cash, min_stock;
int increasing_days = 0;

int main() {

    // input
    cin >> money;
    jun_cash = money; min_cash = money;
    jun_stock = 0; min_stock = 0;

    stock.resize(14);

    for(int i = 0; i < 14; i++) {
        cin >> stock[i];
    }

    // jun
    for(int i = 0; i < 14; i++) {
        // stock input

        // jun
        int can_buy = 1;
        while(1) {
            if(jun_cash >= stock[i] * can_buy) {
                can_buy++; continue;
            }
            else break;
        }
        can_buy--;
        jun_cash -= stock[i] * can_buy;
        jun_stock += can_buy;
    }

    // min
    int inc_days = 0;
    int dec_days = 0;

    for(int i = 0; i < 14; i++) {
        if(i >= 1) {
            if(stock[i - 1] < stock[i]) { inc_days++; dec_days = 0; }
            else if(stock[i - 1] > stock[i]) { dec_days++; inc_days = 0; }

            // sell all
            if(inc_days >= 3) {
                min_cash += min_stock * stock[i];
                min_stock = 0;
            }
            // buy all
            else if(dec_days >= 3) {
                int can_buy = 1;
                while(1) {
                    if(min_cash >= stock[i] * can_buy) {
                        can_buy++; continue;
                    }
                    else break;
                }
                can_buy--;
                min_cash -= stock[i] * can_buy;
                min_stock += can_buy;
            }
        }
    }

    int final_jun = stock[stock.size() - 1] * jun_stock + jun_cash;
    int final_min = stock[stock.size() - 1] * min_stock + min_cash;

    if(final_jun > final_min) cout << "BNP";
    else if(final_jun < final_min) cout << "TIMING";
    else cout << "SAMESAME";

    return 0;
}
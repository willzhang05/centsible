#include <stdio.h>
#include <string>
#include <cstdlib>

using std::string;
using std::system;

int main() {
    string cmd = "curl -X POST --header \"Content-Type: application/json\" --header \"Accept: application/json\" -d \"{\\\"type\\\": \\\"Credit Card\\\",\\\"nickname\\\": \\\"Centsible\\\",\\\"rewards\\\": 0,\\\"balance\\\": 0,\\\"account_number\\\": \\\"0000000000000001\\\"}\" \"http://api.reimaginebanking.com/customers/57092e1b319313dd1b4310e8/accounts?key=7183aadcbc7ff9d602fb63db7fe93f2b\"";
    system(cmd.c_str());
    std::cout << std::endl;
}

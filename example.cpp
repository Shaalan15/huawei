#include<iostream>
#include<string>
using namespace std;
class person
{
private:
    string firstname;
    string lastname;
    int age;
public:
    void setname(string f,string l);
    string getFirstname();
    string getLastname();
    void setAge(int a);
    int getAge();
};

void person::setname(string f,string l)
{
        firstname=f;
        lastname=l;
}

string person::getFirstname()
{
    return firstname;
};
string person::getLastname()
{
    return lastname;
}
void person::setAge(int a)
{
    age=a;
}
int person::getAge()
{
    return age;
}

class customer:person
{
private:
    char accountnumber[10];
    int funds; //Money in Customer's account
public:
    void setaccountnumber();
    int getaccountnumber(); //{return accountnumber;}
    void addfunds(int x); //{if (x>0){funds=funds+x;}else{cout<<"Cannot add negative funds!";}}
    void takefunds(int x);
    int getfunds();
};

void customer::setaccountnumber()
{
    for (int i = 0; i < 10; i++)
{
    accountnumber[i]=rand() % 10; //Get a random digit from 0 to 9
}
}
int getaccountnumber()
{
    return accountnumber;
}
void customer::addfunds(int x)
{
    funds = funds + x;
}
void takefunds(int x)
{
    if ((funds-x) < 0)
    {
        cout<<"You do not have enough funds. \n";
    }
    else{
        funds = funds-x;
        cout<<"Funds have been withdrawn. \nYour new balance is: "<<getfunds();
    }
}
int getfunds()
{
    return funds;
}

class ATM
{
private:
    int amount = 4000;
    customer atmUser;
public:
    ATM(/* args */);
    ~ATM();
    void withdraw(int x);
    void deposit(int x);
    void refill();
    void createaccount();
    void modifyaccount();
    int checkfunds();
    void requestloan();
};

ATM::ATM(/* args */)
{
}

ATM::~ATM()
{
}

int main(){

}

class Star{
    public static void printStar(int n){
        int star=1,space=n-1;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=space;j++){
                System.out.print("  ");
            }
            
            for(int j=1;j<=star;j++){
                System.out.print("* ");
            }
            star+=2;
            space--;
            System.out.println();
        }
         System.out.println("--------------------");
    }
    
     public static void printStar1(int n){
        int star=1,space=n-1;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=space;j++){
                System.out.print("  ");
            }
            
            for(int j=1;j<=star;j++){
                System.out.print("*   ");
            }
            star++;
            space--;
            System.out.println();
        }
    }
    public static void main(String [] args){
        printStar(5);
        printStar1(5);
    }
}
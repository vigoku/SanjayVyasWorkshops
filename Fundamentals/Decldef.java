class Decldef {
    int i;

    int getI (){
        return i;
    }

    void setI(int val){
        i = val;
    }
    public static void main(String[] args) {
        Decldef a; // reference -- definition of reference a
        // a.getI();
        Decldef b = new Decldef();
        b.setI(1);
        System.out.println(b.getI());
    }
}
const {lsb}=require("../lsb")
it("lsb returns correct value",()=>{
    expect(lsb(12)).toBe(4);
    expect(lsb(1)).toBe(1);
    expect(lsb(2)).toBe(2);
    expect(lsb(3)).toBe(1);
    expect(lsb(4)).toBe(4);
    expect(lsb(5)).toBe(1);

})
function start() {
  st = new SGSlidingTab();

  st.addTab("Main");
  st.addTab("Side");
  st.addTab("Settings");

  st.onChange(() => {
    print(st.value + " Start");
  });

  st.onAnimationEnd(() => {
    print(st.value + " Finish");
  });

  st.value = "Settings";

  b = new SGButton("Reset");
  b.x = 400;
  b.y = 400;
  b.onClick(() => {
    st.removeTab("Side");
  });
}

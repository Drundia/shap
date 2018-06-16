shap : shap-browser.js shap-node.js

shap-browser : shap-browser.js
shap-browser.js : source/shap-main.js
	cp source/shap-main.js shap-browser.js

shap-node : shap-node.js
shap-node.js : source/shap-node.h source/shap-node.js source/shap-main.js
	cpp -P -Wundef -nostdinc -C source/shap-node.h -o shap-node.js


.PHONY : clean
clean :
	-rm *.js
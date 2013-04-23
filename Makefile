build: lib/har-to-curl.js
	@component build --standalone harToCurl --name hartocurl.standalone
	@curl --data-urlencode "js_code@build/hartocurl.standalone.js" --data "compilation_level=SIMPLE_OPTIMIZATIONS&output_info=compiled_code&output_format=text" http://closure-compiler.appspot.com/compile -o build/hartocurl.standalone.min.js --progress-bar

clean:
	rm -fr build

.PHONY: clean
